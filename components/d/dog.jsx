import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/d/d1_55-1qs.css';
import '../../css/w/wey5p1sfv.css';
import '../../css/i/ihlauv3xj.css';
import '../../css/i/i8ovj0b2c.css';
import '../../css/n/nghj14blp.css';
import '../../css/d/dsl3p3moq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="d1_55-1qs wm-shadow"/><path class="wey5p1sfv wm-shadow"/><path class="ihlauv3xj"/><path class="i8ovj0b2c"/><path class="nghj14blp"/><path class="dsl3p3moq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:dog"} {...others} />);
}

export default Component;
