import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf43dzb5n.css';

const viewBox = {"width":462.9,"height":462.9};
const content = `<path class="uf43dzb5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:intervals-icu-light"} {...others} />);
}

export default Component;
