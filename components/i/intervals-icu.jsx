import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f02lo6bya.css';
import '../../css/b/bdrh4zbik.css';

const viewBox = {"width":462.9,"height":462.9};
const content = `<circle class="f02lo6bya"/><path class="bdrh4zbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:intervals-icu"} {...others} />);
}

export default Component;
