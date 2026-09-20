import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3eafdb9i.css';
import '../../css/l/l3s0zkbsw.css';
import '../../css/w/w46j_zbyn.css';
import '../../css/z/z5qn04bnh.css';
import '../../css/o/o8ago7ovj.css';
import '../../css/s/s2qk4wsfv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d3eafdb9i"/><path class="l3s0zkbsw"/><path class="w46j_zbyn"/><path class="z5qn04bnh"/><path class="o8ago7ovj"/><path class="s2qk4wsfv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:cash-hand-1"} {...others} />);
}

export default Component;
