import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smwwurb-l.css';
import '../../css/r/r2bxk5btj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="smwwurb-l"/><path class="r2bxk5btj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:building-real-eastate-location"} {...others} />);
}

export default Component;
