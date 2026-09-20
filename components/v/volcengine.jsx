import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz7x-rb-m.css';
import '../../css/q/qk8x-bb5p.css';
import '../../css/a/akdxg9upc.css';
import '../../css/m/mz595l-ia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oz7x-rb-m"/><path class="qk8x-bb5p"/><path class="akdxg9upc"/><path class="mz595l-ia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:volcengine"} {...others} />);
}

export default Component;
