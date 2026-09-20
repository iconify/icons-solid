import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlr7esbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rlr7esbwq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:circle-arrows-right-filled"} {...others} />);
}

export default Component;
