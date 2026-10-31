import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fyrlk0i8z.css';
import '../../css/z/zmyv7ibsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fyrlk0i8z"/><path class="zmyv7ibsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:ball-wave"} {...others} />);
}

export default Component;
