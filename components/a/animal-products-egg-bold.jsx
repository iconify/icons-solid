import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixfou5b7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ixfou5b7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:animal-products-egg-bold"} {...others} />);
}

export default Component;
