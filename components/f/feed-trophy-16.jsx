import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2q6z65vi.css';
import '../../css/h/hbv-qyu8a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v2q6z65vi"/><path class="hbv-qyu8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:feed-trophy-16"} {...others} />);
}

export default Component;
