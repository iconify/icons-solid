import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnwt2bcqt.css';
import '../../css/p/prkek0ihm.css';
import '../../css/r/rpvb-o6bq.css';
import '../../css/c/cdf-aebkz.css';
import '../../css/d/drrvpubmt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="pnwt2bcqt"/><path class="prkek0ihm"/><g class="rpvb-o6bq"><path class="cdf-aebkz"/><path class="drrvpubmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:pen"} {...others} />);
}

export default Component;
