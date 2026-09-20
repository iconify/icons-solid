import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v7qjmubxj.css';
import '../../css/c/c438zfb4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v7qjmubxj"/><path class="c438zfb4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:cloud-change"} {...others} />);
}

export default Component;
