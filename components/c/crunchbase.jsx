import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xu4v59b1a.css';
import '../../css/d/dc02pybze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xu4v59b1a"/><path class="dc02pybze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:crunchbase"} {...others} />);
}

export default Component;
