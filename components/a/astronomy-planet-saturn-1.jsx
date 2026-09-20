import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxd5kuw6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxd5kuw6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:astronomy-planet-saturn-1"} {...others} />);
}

export default Component;
