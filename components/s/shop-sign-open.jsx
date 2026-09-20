import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spgkc6byu.css';
import '../../css/l/l_cigjbby.css';
import '../../css/r/re5azabqi.css';
import '../../css/c/cp59p6b7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="spgkc6byu"/><path class="l_cigjbby"/><path class="re5azabqi"/><path class="cp59p6b7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:shop-sign-open"} {...others} />);
}

export default Component;
