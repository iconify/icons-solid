import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n33qg_bqv {
  fill: currentColor;
  d: path("M248 68H8a4 4 0 0 0 0 8h12v116a4 4 0 0 0 8 0v-52h200v52a4 4 0 0 0 8 0V76h12a4 4 0 0 0 0-8M28 76h96v56H28Zm200 56h-96V76h96ZM92 104a4 4 0 0 1-4 4H64a4 4 0 0 1 0-8h24a4 4 0 0 1 4 4m72 0a4 4 0 0 1 4-4h24a4 4 0 0 1 0 8h-24a4 4 0 0 1-4-4");
}
</style><path class="n33qg_bqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:desk-thin"} {...others} />);
}

export default Component;
