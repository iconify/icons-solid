import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hnl-gqbew.css';
import '../../css/n/nonwbwmmw.css';
import '../../css/u/uq49ljb0l.css';
import '../../css/e/ec4m2xbjh.css';
import '../../css/v/v4ynd4b8y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hnl-gqbew"/><path class="nonwbwmmw"/><path class="uq49ljb0l"/><path class="ec4m2xbjh"/><path class="v4ynd4b8y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:database-2"} {...others} />);
}

export default Component;
