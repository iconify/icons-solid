import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljv9kz7ks.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="ljv9kz7ks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:pet-store"} {...others} />);
}

export default Component;
