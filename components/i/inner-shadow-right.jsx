import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/n/ngt05uq9h.css';
import '../../css/u/uzkyxijji.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG6sS6UduF"><g class="gopnm44um"><path clip-rule="evenodd" class="ngt05uq9h"/><path class="uzkyxijji"/></g></mask></defs><path mask="url(#SVG6sS6UduF)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:inner-shadow-right"} {...others} />);
}

export default Component;
