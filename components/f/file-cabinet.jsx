import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/f/fv27g2bcl.css';
import '../../css/o/o97bhjbta.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG09G3yFvg"><g class="s9cl3zbei"><path class="fv27g2bcl"/><path class="o97bhjbta"/></g></mask></defs><path mask="url(#SVG09G3yFvg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-cabinet"} {...others} />);
}

export default Component;
