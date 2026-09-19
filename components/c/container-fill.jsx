import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5gvgqbic.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="k5gvgqbic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:container-fill"} {...others} />);
}

export default Component;
