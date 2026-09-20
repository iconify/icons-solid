import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sj-7aacby.css';
import '../../css/x/x-5baobki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="sj-7aacby"/><path class="x-5baobki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:cinema-4d-logo"} {...others} />);
}

export default Component;
