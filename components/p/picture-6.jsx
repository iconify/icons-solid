import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6tjmo3jk.css';
import '../../css/z/z_eyx5noj.css';
import '../../css/r/ro1nd0bow.css';
import '../../css/n/nltp0hx2m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="z6tjmo3jk"><path class="z_eyx5noj"/><path class="ro1nd0bow"/><path class="nltp0hx2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:picture-6"} {...others} />);
}

export default Component;
