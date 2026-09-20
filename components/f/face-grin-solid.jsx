import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mlrhk_-_t.css';
import '../../css/b/blghhjben.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mlrhk_-_t"/><path class="blghhjben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:face-grin-solid"} {...others} />);
}

export default Component;
