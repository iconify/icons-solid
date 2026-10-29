import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvuvceb0e.css';
import '../../css/f/ff9iz31pd.css';
import '../../css/x/x08cpt1pz.css';
import '../../css/b/bfl1gac6p.css';
import '../../css/i/i2kz-cc1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvuvceb0e"/><path class="ff9iz31pd"/><path class="x08cpt1pz"/><path class="bfl1gac6p"/><path class="i2kz-cc1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:toilet"} {...others} />);
}

export default Component;
