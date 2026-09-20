import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/i/izvovy.css';
import '../../css/f/f-8s9h.css';
import '../../css/u/u2yb_n.css';
import '../../css/o/oxmyas.css';
import '../../css/s/so-from-22.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c izvovy"/><path class="a0m25c f-8s9h"/><path class="a0m25c u2yb_n"/><path class="a0m25c oxmyas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:person-add"} {...others} />);
}

export default Component;
