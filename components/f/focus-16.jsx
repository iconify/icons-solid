import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dwlcgjbwv.css';
import '../../css/d/dngedb3dc.css';
import '../../css/l/lg-e2pb6r.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dwlcgjbwv"/><path clip-rule="evenodd" class="dngedb3dc"/><path class="lg-e2pb6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:focus-16"} {...others} />);
}

export default Component;
