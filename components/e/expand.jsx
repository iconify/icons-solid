import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izssm8bhj.css';
import '../../css/j/jm2vxcz9l.css';
import '../../css/k/k-2bxsbuk.css';
import '../../css/x/x891vwcen.css';
import '../../css/v/vvqquubbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="izssm8bhj"/><path class="jm2vxcz9l"/><path class="k-2bxsbuk"/><path class="x891vwcen"/><path class="vvqquubbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:expand"} {...others} />);
}

export default Component;
