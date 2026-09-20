import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci8y9zdxq.css';
import '../../css/p/p2cix6gor.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ci8y9zdxq"/><path class="p2cix6gor"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:building-filled"} {...others} />);
}

export default Component;
