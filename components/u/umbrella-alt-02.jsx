import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jllui1bis.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jllui1bis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:umbrella-alt-02"} {...others} />);
}

export default Component;
