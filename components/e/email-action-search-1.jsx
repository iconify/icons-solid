import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a20rpk27t.css';
import '../../css/z/z-hpywrvi.css';
import '../../css/u/u0eu7acuy.css';
import '../../css/s/sehpe0btu.css';
import '../../css/i/i6yn_gbzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="a20rpk27t"/><path class="z-hpywrvi"/><path class="u0eu7acuy"/><path class="sehpe0btu"/><path class="i6yn_gbzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:email-action-search-1"} {...others} />);
}

export default Component;
