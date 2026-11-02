import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p-ve0sbes {
  fill: currentColor;
  d: path("M17 22H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5M8.315 8.443a4 4 0 1 0 7.37 3.114a4 4 0 0 0-7.37-3.114m9.536 11.435c-.271-.989-.895-1.85-1.691-2.487c-2.323-1.858-5.997-1.858-8.32 0c-.796.637-1.42 1.498-1.691 2.487q.416.123.851.122h10q.434.001.851-.122");
}
</style><path class="p-ve0sbes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-user-fill-round"} {...others} />);
}

export default Component;
