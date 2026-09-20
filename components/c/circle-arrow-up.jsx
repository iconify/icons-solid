import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf-3i8bls.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tf-3i8bls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-arrow-up"} {...others} />);
}

export default Component;
