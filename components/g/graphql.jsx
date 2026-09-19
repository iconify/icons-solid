import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzq6zreob.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="lzq6zreob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:graphql"} {...others} />);
}

export default Component;
