import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzseqcwrs.css';
import '../../css/m/myskqwb-c.css';
import '../../css/h/hohkujz8t.css';
import '../../css/j/jxa_5vbkb.css';
import '../../css/s/stktq5xsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xzseqcwrs"/><path class="myskqwb-c"/><path class="hohkujz8t"/><path class="jxa_5vbkb"/><path class="stktq5xsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sensenova"} {...others} />);
}

export default Component;
