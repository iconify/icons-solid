import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fs770bsej.css';
import '../../css/z/ztyr4ccyb.css';
import '../../css/q/q8nk54bpo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fs770bsej"/><path class="ztyr4ccyb"/><path class="q8nk54bpo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:six"} {...others} />);
}

export default Component;
