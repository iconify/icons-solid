import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y54er8bmd.css';
import '../../css/a/asifw5bne.css';
import '../../css/h/hntgybcog.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGzqMQVdtE" class="y54er8bmd"/><path id="SVGHGSBDebM" class="asifw5bne"/></defs><g class="hntgybcog"><use href="#SVGzqMQVdtE"/><use href="#SVGHGSBDebM"/><use href="#SVGzqMQVdtE"/><use href="#SVGHGSBDebM"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:smiley-wrong"} {...others} />);
}

export default Component;
