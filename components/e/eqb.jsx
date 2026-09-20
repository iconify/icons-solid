import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aokn9xt1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aokn9xt1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:eqb"} {...others} />);
}

export default Component;
