import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgv2o1bno.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cgv2o1bno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:film-1-filled"} {...others} />);
}

export default Component;
