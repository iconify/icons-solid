import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxg1zz31j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dxg1zz31j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:apple-heart"} {...others} />);
}

export default Component;
