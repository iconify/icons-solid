import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufeehvblu.css';
import '../../css/f/fde0_4q6a.css';
import '../../css/z/z_1kwcpba.css';
import '../../css/c/cwm8rmbye.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjZUWBcHI"><g class="ufeehvblu"><path class="fde0_4q6a"/><path clip-rule="evenodd" class="z_1kwcpba"/><path class="cwm8rmbye"/></g></mask></defs><path mask="url(#SVGjZUWBcHI)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:open-door"} {...others} />);
}

export default Component;
