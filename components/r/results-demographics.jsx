import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sptkvotuc.css';
import '../../css/h/hs6ysgr6t.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="sptkvotuc"/><path class="hs6ysgr6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:results-demographics"} {...others} />);
}

export default Component;
