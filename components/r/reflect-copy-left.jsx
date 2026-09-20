import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yzz2v3bok.css';
import '../../css/c/c3y7nqned.css';
import '../../css/h/huqnwlvew.css';
import '../../css/h/hi72lwbad.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yzz2v3bok"/><path class="c3y7nqned"/><path class="huqnwlvew"/><path class="hi72lwbad"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:reflect-copy-left"} {...others} />);
}

export default Component;
