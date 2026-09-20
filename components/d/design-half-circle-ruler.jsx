import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m5ho_kb9h.css';
import '../../css/l/l6k3nwb1m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="m5ho_kb9h"/><path class="l6k3nwb1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-half-circle-ruler"} {...others} />);
}

export default Component;
