import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4e2dybch.css';
import '../../css/i/ibasdbcyq.css';
import '../../css/q/qiv3vz5la.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="p4e2dybch"/><path class="ibasdbcyq"/><path class="qiv3vz5la"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:krakenjs-wordmark"} {...others} />);
}

export default Component;
