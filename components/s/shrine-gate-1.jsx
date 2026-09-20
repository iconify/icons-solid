import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iji_sobkw.css';
import '../../css/v/vm1-nhb2d.css';
import '../../css/j/joz2cdb2z.css';
import '../../css/g/g21e12bby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iji_sobkw"/><path class="vm1-nhb2d"/><path class="joz2cdb2z"/><path class="g21e12bby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:shrine-gate-1"} {...others} />);
}

export default Component;
