import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qwoo8gbut.css';
import '../../css/t/t5xij2brj.css';
import '../../css/y/y8jo2vbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qwoo8gbut"/><path class="t5xij2brj"/><path class="y8jo2vbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:eye-cross"} {...others} />);
}

export default Component;
