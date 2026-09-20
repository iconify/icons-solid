import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uzom6mbpj.css';
import '../../css/q/q5n6f-beh.css';
import '../../css/e/ebc_6bb9s.css';
import '../../css/c/cjlay9i0m.css';
import '../../css/k/kjmyri7xa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="uzom6mbpj"/><path class="q5n6f-beh"/><path class="ebc_6bb9s"/><path class="cjlay9i0m"/><path class="kjmyri7xa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:a11y-accessibility-disability"} {...others} />);
}

export default Component;
