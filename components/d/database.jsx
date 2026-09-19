import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b6b2j8btj.css';
import '../../css/w/wrweh8jcs.css';
import '../../css/h/ho0kx1xbu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="b6b2j8btj"/><path class="wrweh8jcs"/><path class="ho0kx1xbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:database"} {...others} />);
}

export default Component;
