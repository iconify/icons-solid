import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/b/bwox_zbki.css';
import '../../css/e/eb-_brbes.css';
import '../../css/k/kdrl824us.css';
import '../../css/g/gsktvc3uv.css';
import '../../css/w/wrndkhp9o.css';
import '../../css/j/js4rzib2f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="bwox_zbki"/><path class="eb-_brbes"/><circle class="kdrl824us"/><path class="gsktvc3uv"/><circle class="wrndkhp9o"/><path class="js4rzib2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-text-formatting-list-bullets-points-bullet-unordered-list-lists-bullets"} {...others} />);
}

export default Component;
