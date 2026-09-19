import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1f7g1lws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u1f7g1lws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:hyundai-ioniq"} {...others} />);
}

export default Component;
