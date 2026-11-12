import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipo4v_b4w.css';
import '../../css/m/mngh2w-cy.css';
import '../../css/q/qr-5js_2c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ipo4v_b4w"/><path class="mngh2w-cy"/><path class="qr-5js_2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kchat-dark"} {...others} />);
}

export default Component;
