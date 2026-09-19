import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/ab1-j-jdh.css';
import '../../css/c/cj53yjbsz.css';
import '../../css/y/yig1dlbzd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5rISxenJ"><g class="s9cl3zbei"><path class="ab1-j-jdh"/><path class="cj53yjbsz"/><path class="yig1dlbzd"/></g></mask></defs><path mask="url(#SVG5rISxenJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:file-jpg"} {...others} />);
}

export default Component;
