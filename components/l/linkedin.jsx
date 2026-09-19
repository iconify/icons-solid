import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-2yo-qdb.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="m-2yo-qdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:linkedin"} {...others} />);
}

export default Component;
