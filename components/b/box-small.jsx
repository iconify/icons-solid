import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lywu_-b-a.css';
import '../../css/b/bvqviuxxc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lywu_-b-a"/><path class="bvqviuxxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:box-small"} {...others} />);
}

export default Component;
