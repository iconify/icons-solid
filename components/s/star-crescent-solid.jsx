import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chq-6r-9v.css';
import '../../css/b/btvzwg_0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="chq-6r-9v"/><path class="btvzwg_0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:star-crescent-solid"} {...others} />);
}

export default Component;
